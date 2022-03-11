<template>
  <div>
    <el-card class="main-card-box">
      <!-- 头部选择器 -->
      <div slot="header">
        <el-form class="g-tool-form" :inline="true">
          <div class="g-tool-form-left">
            <el-form-item>
              <el-input
                style="width: 180px"
                size="small"
                v-model="searchInputValue"
                placeholder="关键字搜索"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button icon="el-icon-search" type="primary" size="small">
                查询
              </el-button>
            </el-form-item>
          </div>

          <div class="g-tool-form-right">
            <el-form-item>
              <el-button
                icon="el-icon-upload2"
                type="primary"
                size="small"
                @click="showUploadDialog"
              >
                上传课件
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small"> 批量删除 </el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small"> 批量下载 </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!-- 表格展示 -->
      <el-table :data="documentTableData" stripe>
        <el-table-column type="selection"></el-table-column>
        <el-table-column
          type="index"
          label="序号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="fileName"
          label="课件名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="school"
          label="学校"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="teacher"
          label="老师"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="grade"
          label="年级"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="subject"
          label="学科"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createDate"
          label="上传时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="downloadCount"
          label="下载次数"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center" width="230px">
          <template slot-scope="">
            <el-link icon="el-icon-view" :underline="false">预览</el-link>
            <el-link icon="el-icon-download" :underline="false">下载</el-link>
            <el-link icon="el-icon-edit-outline" :underline="false"
              >编辑</el-link
            >
            <el-link
              icon="el-icon-delete"
              :underline="false"
              @click="showDeleteOneMessageBox"
              >删除</el-link
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="pagination-box">
        <el-pagination
          :current-page="1"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </el-card>

    <!-- 上传课件对话框 -->
    <el-dialog
      title="上传课件"
      :visible.sync="uploadFileDialogVisible"
      width="40%"
    >
      <div style="display: flex; justify-content: center">
        <el-form :model="uploadFileForm" label-width="80px">
          <el-form-item label="课件名称" required>
            <el-input
              v-model="uploadFileForm.fileName"
              placeholder="请输入课件名称"
              style="width: 546px"
            ></el-input>
          </el-form-item>

          <div style="display: flex">
            <el-form-item label="应用年级" required>
              <el-select v-model="uploadFileForm.grade" placeholder="请选择">
                <el-option
                  v-for="item in gradeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="应用学科" required style="margin-left: 31px">
              <el-select v-model="uploadFileForm.subject" placeholder="请选择">
                <el-option
                  v-for="item in subjectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="上传课件" required>
            <div style="display: flex; margin-bottom: 10px">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="3"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
              <div class="tip-text">（仅支持上传PDF，Word，PPT格式文件）</div>
            </div>

            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="70"
            ></el-progress>
          </el-form-item>

          <el-form-item label="文件备注">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="uploadFileForm.remark"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer">
        <el-button @click="uploadFileDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadFileDialogVisible = false"
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
      searchInputValue: "",
      documentTableData: [
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
        {
          fileName: "高三语文专递课堂教案",
          school: "沈阳市第十一中学",
          teacher: "李欣",
          grade: "高三",
          subject: "语文",
          createDate: "2020-12-02",
          downloadCount: "78",
        },
      ],
      uploadFileDialogVisible: false,
      uploadFileForm: {
        fileName: "",
        grade: "",
        subject: "",
        remark: "",
      },
    };
  },
  computed: {
    ...mapState([
      "schoolOptions",
      "teacherOptions",
      "gradeOptions",
      "subjectOptions",
    ]),
  },
  methods: {
    // 删除单个记录
    showDeleteOneMessageBox() {
      this.$confirm("是否确定删除该课件?", "删除课件提示", {
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
    },
    // 显示上传课件对话框
    showUploadDialog() {
      this.uploadFileDialogVisible = true;
    },
  },
};
</script>
<style lang="less" scoped>
.el-link:not(last-child) {
  margin-right: 5px;
}

.pagination-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tip-text {
  font-size: 13px;
  font-weight: 400;
  color: #c0c4cc;
}
</style>