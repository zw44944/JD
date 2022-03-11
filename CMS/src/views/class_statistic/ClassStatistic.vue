<template>
  <div>
    <el-card class="main-card-box">
      <div slot="header">
        <el-form class="g-tool-form" :inline="true">
          <div class="g-tool-form-left">
            <el-form-item label="学校">
              <el-select
                v-model="schoolSelectValue"
                placeholder="请选择"
                size="small"
                style="width: 200px"
              >
                <el-option
                  v-for="item in schoolOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="老师">
              <el-select
                v-model="teacherSelectValue"
                placeholder="请选择"
                size="small"
                style="width: 200px"
              >
                <el-option
                  v-for="item in teacherOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学期">
              <el-date-picker
                v-model="dateRangeValue"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
                style="width: 200px"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="月份">
              <el-date-picker
                v-model="dateValue"
                type="month"
                placeholder="选择月份"
                size="small"
                style="width: 200px"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button icon="el-icon-search" type="primary" size="small"
                >查询</el-button
              >
            </el-form-item>
          </div>
          <div>
            <el-form-item>
              <el-button icon="el-icon-document" type="primary" size="small">
                导出
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="summary-box">
        <div
          class="summary-item"
          v-for="(item, index) in summaryList"
          :key="index"
        >
          <img :src="item.imgPath" alt="" width="60px" height="60px" />
          <div class="right">
            <div>
              <span>{{ item.countNum }}</span>
              <span>/人</span>
            </div>
            <div class="bottom">{{ item.type }}</div>
          </div>
        </div>
      </div>

      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        header-cell-class-name="table-header"
        cell-class-name="table-cell-style"
      >
        <el-table-column type="index" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="teacherName" label="老师" width="180">
        </el-table-column>
        <el-table-column prop="subject" label="学科"> </el-table-column>
        <el-table-column prop="speakNum" label="主讲/次"> </el-table-column>
        <el-table-column prop="video" label="录课/次"> </el-table-column>
        <el-table-column prop="video" label="操作">
          <template>
            <div @click="dialogVisible = true" style="cursor: pointer">
              <i class="el-icon-document-add" style="margin-right: 2px"></i
              >查看详情
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        :current-page="1"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </el-card>

    <el-dialog title="查看详情" :visible.sync="dialogVisible" width="50%">
      <el-form class="g-tool-form" :inline="true">
        <div class="g-tool-form-left">
          <el-form-item label="状态">
            <el-select
              v-model="statusSelectValue"
              placeholder="请选择"
              size="small"
              style="width: 200px"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="middle-form-item" label="操作时间">
            <el-date-picker
              v-model="operationTime"
              type="date"
              size="small"
              style="width: 200px"
            ></el-date-picker>
          </el-form-item>
        </div>
        <div class="g-tool-form-right">
          <el-form-item class="form-tool1">
            <el-button icon="el-icon-document-add" type="primary" size="small"
              >导出</el-button
            >
          </el-form-item>
          <el-form-item class="form-tool2">
            <el-button icon="el-icon-document" type="primary" size="small"
              >查询</el-button
            >
          </el-form-item>
        </div>
      </el-form>

      <el-table
        :data="dialogTableData"
        stripe
        style="width: 100%; margin-top: 18px"
        header-cell-class-name="table-header"
        cell-class-name="table-cell-style"
      >
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="teacherName" label="老师"> </el-table-column>
        <el-table-column prop="status" label="学科"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <div class="tag-box">
              <el-tag
                v-for="(item, index) in scope.row.status"
                :key="index"
                size="medium"
                :type="item === '录制' ? 'warning' : ''"
                >{{ item }}</el-tag
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="操作时间"> </el-table-column>
        <el-table-column prop="duration" label="操作时长（主讲/录制）">
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      summaryList: [
        {
          imgPath: require("../../assets/class/t.png"),
          countNum: 25,
          unit: "人",
          type: "老师",
        },
        {
          imgPath: require("../../assets/class/zhujiang.png"),
          countNum: 36,
          unit: "次",
          type: "主讲",
        },
        {
          imgPath: require("../../assets/class/tingke.png"),
          countNum: 62,
          unit: "次",
          type: "听课",
        },
        {
          imgPath: require("../../assets/class/luke.png"),
          countNum: 52,
          unit: "次",
          type: "录课",
        },
      ],
      tableData: [
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
        {
          teacherName: "李丹",
          subject: "语文",
          speakNum: 6,
          video: 3,
        },
      ],
      dialogVisible: false,
      schoolSelectValue: "",
      statusOptions: [{ value: "全部", label: "全部" }],
      statusSelectValue: "",
      teacherSelectValue: "",
      dateRangeValue: [],
      dateValue: "",
      operationTime: "",
      dialogTableData: [
        {
          teacherName: "李丹",
          subject: "语文",
          status: ["主讲"],
          date: "2020-11-22",
          duration: "42分钟",
        },
        {
          teacherName: "李丹",
          subject: "语文",
          status: ["主讲", "录制"],
          date: "2020-11-22",
          duration: "42分钟",
        },
      ],
    };
  },
  computed: {
    ...mapState(["schoolOptions", "teacherOptions"]),
  },
};
</script>
<style lang="less" scoped>
.summary-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 17px 0 37px 0;
}

.summary-item {
  display: flex;

  .right {
    display: flex;
    flex-direction: column;
    margin-left: 14px;

    span {
      &:first-child {
        font-size: 29px;
      }
      &:last-child {
        margin-left: 13px;
        color: #666666;
        font-size: 13px;
      }
    }

    .bottom {
      color: #666666;
      font-size: 12px;
    }
  }
}
// 表格 start

// 表格 end

// 分页 start
.el-pagination {
  margin-top: 57px;
  margin-left: 50%;
  transform: translateX(-50%);
}
// 分页 end

// 对话框 start
.dialog-form .el-form-item {
  margin-bottom: 0;
  .middle-form-item {
    margin-left: 40px;
  }
}
.form-tool1 {
  float: right;
  margin-right: 12px;
}

.form-tool2 {
  float: right;
}

.tag-box {
  .el-tag {
    margin: 0 3px;
  }
}
// 对话框 end
</style>