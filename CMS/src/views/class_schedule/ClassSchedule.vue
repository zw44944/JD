<template>
  <div>
    <el-card class="main-card-box">
      <!-- 头部选择器 -->
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
            <el-form-item label="教室">
              <el-select
                v-model="classroomSelectValue"
                placeholder="请选择"
                size="small"
                style="width: 128px"
              >
                <el-option
                  v-for="item in classroomOptions"
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
                style="width: 128px"
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
            <el-form-item>
              <el-button icon="el-icon-search" type="primary" size="small">
                查询
              </el-button>
            </el-form-item>
          </div>
          <div class="g-tool-form-right">
            <el-form-item>
              <el-button
                icon="el-icon-date"
                type="primary"
                size="small"
                @click="openHolidayPlanDialog"
              >
                假期排课
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button icon="el-icon-document" type="primary" size="small">
                导出
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!-- 课程表区域 -->
      <div class="class-table-header">
        <p>教学周：2020年9月2日-2021年1月17日</p>
        <div class="header-tool">
          <el-button
            size="mini"
            icon="el-icon-arrow-left"
            circle
            type="primary"
            plain
          ></el-button>
          <span>第45周</span>
          <el-button size="mini" icon="el-icon-arrow-right" circle></el-button>
        </div>
        <el-button size="small" type="primary">回到当前周</el-button>
      </div>
      <div class="class-table-box">
        <!-- 第一列 -->
        <div class="table-column">
          <div></div>
          <div class="fixed-text column-1" v-for="i in 8" :key="i">
            第{{ i }}节
          </div>
        </div>
        <!-- 后面的列 -->
        <div
          class="table-column"
          v-for="(item, index) in classTableData"
          :key="index"
        >
          <!-- 星期 -->
          <div class="fixed-text flex-vertical-center">
            <p>星期{{ (index + 1) | num2week }}</p>
            <p class="date-text">
              {{ item.date }}
              <el-tag
                v-if="item.date === '2020年12月26日'"
                size="mini"
                effect="dark"
              >
                今天
              </el-tag>
            </p>
          </div>
          <!-- 课表内容 -->
          <div
            class="flex-vertical-center"
            v-for="(item, index1) in classTableData[index].classes"
            :key="index1"
          >
            <el-popover
              v-if="item.subject"
              trigger="hover"
              placement="right-end"
              :visible-arrow="false"
              popper-class="classcell-poper-box"
            >
              <!-- 弹出框 -->
              <div class="flex-vertical-center class-poper">
                <!-- 关闭按钮 -->
                <div class="close-btn"><i class="el-icon-close"></i></div>
                <!-- 标题 -->
                <div class="poper-title">英语（李老师）</div>
                <!-- 内容 -->
                <div class="content-item">
                  <label>主讲教室：</label>
                  <p>沈阳市第十一中学 综合教室1</p>
                </div>
                <div class="content-item">
                  <label>听课教室：</label>
                  <div>
                    <p>沈阳市第十一中学 综合教室1</p>
                    <p>沈阳市第十一中学 综合教室2</p>
                  </div>
                </div>
                <div class="content-item">
                  <label>课程码：</label>
                  <div>
                    <p>1303247874</p>
                  </div>
                </div>
                <div class="content-item">
                  <label>课程码：</label>
                  <div>
                    <img src="../../assets/class_code_img.png" alt="" />
                  </div>
                </div>
                <div style="width: 100%; height: 1px; background: #fff"></div>
                <!-- 删除按钮 -->
                <div class="delete-btn" @click="showDeleteMessageBox">
                  <i class="el-icon-delete"></i>
                </div>
              </div>
              <!-- 课表的内容 -->
              <div class="flex-vertical-center" slot="reference">
                <div class="class-cell-top">
                  <span>{{ item.subject }}</span>
                  <span> | {{ item.teacher }}</span>
                </div>
                <el-tag
                  effect="dark"
                  size="mini"
                  :type="item.status | tagTypeFilter"
                  >{{ item.status }}
                </el-tag>
              </div>
            </el-popover>
            <!-- 添加课程按钮 -->
            <add-class-btn v-else @showAddDialog="show"></add-class-btn>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 新增课程对话框 -->
    <el-dialog
      class="form-dialog-box"
      title="新增课程"
      :visible.sync="addClassDialogVisible"
      width="40%"
    >
      <div>
        <!-- 表单项 课程信息 -->
        <div>
          <!-- title -->
          <div class="form-group-title">课程信息</div>
          <el-form
            :model="classForm"
            :rules="classFormRules"
            ref="classFormRef"
            label-width="100px"
          >
            <el-form-item label="课程名称" prop="className" required>
              <el-input
                v-model="classForm.className"
                style="width: 535px"
              ></el-input>
            </el-form-item>

            <div class="flex-center">
              <el-form-item label="选择学校" prop="school" required>
                <el-select v-model="classForm.school" placeholder="请选择学校">
                  <el-option
                    v-for="item in schoolOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="主讲教室" prop="classroom" required>
                <el-select
                  v-model="classForm.classroom"
                  placeholder="请选择教室"
                >
                  <el-option
                    v-for="item in classroomOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>

            <el-form-item label="上课时间" required>
              <div>
                <el-radio v-model="classForm.classPlan.type" label="1"
                  >周期排课</el-radio
                >
                <el-radio v-model="classForm.classPlan.type" label="2"
                  >临时排课</el-radio
                >
              </div>
              <div style="margin-bottom: 20px">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="classForm.classPlan.startDate"
                ></el-date-picker>

                <span
                  style="margin: 0 20px"
                  v-if="classForm.classPlan.type === '1'"
                  >-</span
                >
                <el-date-picker
                  v-if="classForm.classPlan.type === '1'"
                  type="date"
                  placeholder="选择日期"
                  v-model="classForm.classPlan.endDate"
                ></el-date-picker>
              </div>
              <div style="margin-bottom: 20px">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="classForm.classPlan.startTime"
                ></el-time-picker>
                <span style="margin: 0 20px">-</span>
                <el-time-picker
                  placeholder="选择时间"
                  v-model="classForm.classPlan.endTime"
                ></el-time-picker>
              </div>
              <div
                style="margin-bottom: 20px"
                v-for="(item, index) in classForm.classPlan.weekdays"
                :key="index"
              >
                <el-select
                  v-model="classForm.classPlan.weekdays[index]"
                  placeholder="请选择周几"
                  style="width: 220px"
                >
                  <el-option
                    v-for="item in weekOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
                <span style="margin: 0 20px">-</span>
                <el-select
                  v-model="classForm.classPlan.nums[index]"
                  placeholder="请选择第几节课"
                  style="width: 220px"
                >
                  <el-option
                    v-for="item in classNumOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
                <el-button
                  v-if="classForm.classPlan.nums.length - 1 == index"
                  style="margin-left: 20px"
                  type="primary"
                  icon="el-icon-plus"
                  circle
                  plain
                  size="mini"
                  @click="addClassWeek"
                ></el-button>
                <el-button
                  v-else
                  style="margin-left: 20px"
                  type="danger"
                  icon="el-icon-minus"
                  circle
                  plain
                  size="mini"
                  @click="deleteClassWeek"
                ></el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <!-- 主讲信息 -->
        <div>
          <!-- title -->
          <div class="form-group-title">主讲信息</div>
          <el-form
            :model="speakInfoForm"
            :rules="speakInfoFormRules"
            ref="speakInfoFormRef"
            label-width="100px"
          >
            <el-form-item label="主讲老师" prop="teacher" required>
              <el-select v-model="speakInfoForm.teacher" placeholder="请选择">
                <el-option
                  v-for="item in teacherOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="外聘老师" prop="externalTeacher" required>
              <el-input
                v-model="speakInfoForm.externalTeacher"
                placeholder="请填写外聘老师名字"
                style="width: 217px"
              ></el-input>
            </el-form-item>

            <div class="flex-center">
              <el-form-item label="选择年级" prop="grade" required>
                <el-select v-model="speakInfoForm.grade" placeholder="请选择">
                  <el-option
                    v-for="item in gradeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="选择学科" prop="subject" required>
                <el-select v-model="speakInfoForm.subject" placeholder="请选择">
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
          </el-form>
        </div>
        <!-- 听课信息 -->
        <div>
          <!-- title -->
          <div class="form-group-title">听课信息</div>
          <el-form
            :model="listenInfoForm"
            :rules="listenInfoFormRules"
            ref="listenInfoFormRef"
            label-width="100px"
          >
            <el-form-item label="听课教室" required>
              <div
                style="margin-bottom: 20px"
                v-for="(item, index) in listenInfoForm.schools"
                :key="index"
              >
                <el-select
                  v-model="listenInfoForm.schools[index]"
                  placeholder="请选择学校"
                >
                  <el-option
                    v-for="item in schoolOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <span style="margin: 0 20px">-</span>
                <el-select
                  v-model="listenInfoForm.classrooms"
                  placeholder="请选择教室"
                >
                  <el-option
                    v-for="item in classroomOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-button
                  v-if="listenInfoForm.schools.length - 1 == index"
                  style="margin-left: 20px"
                  type="primary"
                  icon="el-icon-plus"
                  circle
                  plain
                  size="mini"
                  @click="addSchoolSelector"
                ></el-button>
                <el-button
                  v-else
                  style="margin-left: 20px"
                  type="danger"
                  icon="el-icon-minus"
                  circle
                  plain
                  size="mini"
                  @click="deleteSchoolSelector"
                ></el-button>
              </div>
            </el-form-item>

            <el-form-item label="课程码">
              <span style="color: #c0c4cc"
                >26535233325
                <i class="el-icon-document-copy" style="cursor: pointer">
                  复制</i
                >
              </span>
            </el-form-item>

            <el-form-item label="分享码">
              <div
                style="
                  display: flex;
                  align-items: flex-start;
                  padding-top: 10px;
                "
              >
                <el-switch v-model="shareSwitchFlag"> </el-switch>
                <div class="flex-vertical-center" v-show="shareSwitchFlag">
                  <img
                    style="margin-left: 20px"
                    src="../../assets/class_code_img.png"
                    alt=""
                  />
                  <span style="color: #c0c4cc; line-height: 20px"
                    ><i class="el-icon-document-copy" style="cursor: pointer">
                      复制</i
                    ></span
                  >
                </div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <span slot="footer">
        <el-button @click="addClassDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addClassDialogVisible = false"
          >保 存</el-button
        >
      </span>
    </el-dialog>
    <!-- 假期排课对话框 -->
    <el-dialog
      title="假期排课"
      :visible.sync="holidayPlanDialogVisible"
      width="40%"
    >
      <el-form
        :model="holidayPlanForm"
        :rules="holidayPlanFormRules"
        ref="classFormRef"
        label-width="100px"
      >
        <el-form-item label="假期排课" required>
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="holidayPlanForm.startDate"
          ></el-date-picker>

          <span style="margin: 0 20px">-</span>
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="holidayPlanForm.endDate"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <el-alert title="假期排课不计入教学周开课统计" type="warning" show-icon>
      </el-alert>
      <span slot="footer">
        <el-button @click="holidayPlanDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="holidayPlanDialogVisible = false"
          >保 存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AddClassBtn from "./AddClassBtn.vue";

export default {
  data() {
    return {
      schoolSelectValue: "",
      classroomSelectValue: "",
      teacherSelectValue: "",
      classTableData: [
        {
          date: "2020年12月25日",
          classes: [
            {},
            {
              subject: "数学",
              teacher: "李老师",
              status: "未上课",
            },
            {
              subject: "数学",
              teacher: "李老师",
              status: "已上课",
            },
            {},
            {},
            {},
            {},
            {},
          ],
        },
        {
          date: "2020年12月26日",
          classes: [
            { subject: "英语", teacher: "北老师", status: "开始上课" },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ],
        },
        {
          date: "2020年12月27日",
          classes: [{}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          date: "2020年12月28日",
          classes: [
            {},
            {
              subject: "数学",
              teacher: "李老师",
              status: "未上课",
            },
            {},
            {},
            {},
            {},
            {},
            {},
          ],
        },
        {
          date: "2020年12月29日",
          classes: [
            {},
            {},
            {},
            { subject: "数学", teacher: "李老师", status: "未上课" },
            {},
            {},
            {},
            {},
          ],
        },
        {
          date: "2020年12月30日",
          classes: [{}, {}, {}, {}, {}, {}, {}, {}],
        },
        {
          date: "2020年12月31日",
          classes: [{}, {}, {}, {}, {}, {}, {}, {}],
        },
      ],
      addClassDialogVisible: false,
      // 课程信息表单
      classForm: {
        className: "",
        school: "",
        classroom: "",
        classPlan: {
          type: "1",
          startDate: "",
          endDate: "",
          startTime: "",
          endTime: "",
          weekdays: [""],
          nums: [""],
        },
      },
      weekOptions: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      classNumOptions: [1, 2, 3, 4, 5, 6, 7, 8],
      classFormRules: {},
      // 主讲信息表单
      speakInfoForm: {
        teacher: "",
        externalTeacher: "",
        grade: "",
        subject: "",
      },
      speakInfoFormRules: {},
      listenInfoForm: {
        schools: [""],
        classrooms: [""],
      },
      listenInfoFormRules: {},
      shareSwitchFlag: false,
      holidayPlanDialogVisible: false,
      holidayPlanForm: {
        startDate: "",
        endDate: "",
      },
      holidayPlanFormRules: {},
    };
  },
  updated() {
    // console.log(this.shareSwitchFlag);
  },
  methods: {
    // 显示删除课程消息框
    showDeleteMessageBox() {
      this.$confirm("删除本节课还是删除该学科的所有课程?", "删除课程提示", {
        confirmButtonText: "删除本节课",
        cancelButtonText: "删除该学科所有课",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$confirm("是否删除该学科的所有课程?", "删除课程提示", {
            confirmButtonText: "确认删除",
            cancelButtonText: "取消",
            confirmButtonClass: "danger-button",
            type: "error",
          }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        });
    },
    // 显示添加课程对话框
    show() {
      this.addClassDialogVisible = true;
    },
    // 添加周期排课的星期选择器
    addClassWeek() {
      this.classForm.classPlan.weekdays.push("");
      this.classForm.classPlan.nums.push("");
    },
    // 删除周期排课的星期选择器
    deleteClassWeek() {
      this.classForm.classPlan.weekdays.pop();
      this.classForm.classPlan.nums.pop();
    },
    // 添加学校选择器
    addSchoolSelector() {
      this.listenInfoForm.schools.push("");
      this.listenInfoForm.classrooms.push("");
    },
    // 删除学校选择器
    deleteSchoolSelector() {
      this.listenInfoForm.schools.pop();
      this.listenInfoForm.classrooms.pop();
    },
    // 打开假期排课对话框
    openHolidayPlanDialog() {
      this.holidayPlanDialogVisible = true;
    },
  },
  computed: {
    ...mapState([
      "schoolOptions",
      "classroomOptions",
      "teacherOptions",
      "gradeOptions",
      "subjectOptions",
    ]),
  },
  filters: {
    num2week(input) {
      switch (input) {
        case 1:
          return "一";
        case 2:
          return "二";
        case 3:
          return "三";
        case 4:
          return "四";
        case 5:
          return "五";
        case 6:
          return "六";
        case 7:
          return "日";
      }
    },
    tagTypeFilter(input) {
      switch (input) {
        case "未上课":
          return "danger";
        case "已上课":
          return "info";
        case "开始上课":
          return "";
        case "未开课":
          return "warning";
      }
    },
  },
  components: {
    AddClassBtn,
  },
};
</script>
<style lang="less" scoped>
// 课程表上方选择周数
.class-table-header {
  display: flex;
  align-items: center;

  p {
    position: absolute;
    font-size: 15px;
    font-weight: bold;
  }
}
// 选择按钮
.header-tool {
  display: flex;
  align-items: center;
  margin-left: 50%;
  margin-right: -70px;
  transform: translateX(-50%);

  span {
    font-size: 16px;
    font-weight: bold;
    margin: 0 49px;
  }
}

// 课程表
.class-table-box {
  display: flex;
  margin-top: 29px;

  .table-column {
    display: flex;
    flex-direction: column;

    > div {
      height: 73px;
      width: 205px;
      border: 1px solid #f1f1f1;
    }
    div ~ div {
      margin-top: -1px;
    }
    .column-1 {
      line-height: 73px;
    }
  }

  .table-column:not(:first-child) {
    margin-left: -1px;
  }

  .fixed-text {
    font-size: 15px;
    font-weight: bold;
    text-align: center;

    .date-text {
      position: relative;
      font-size: 12px;
      color: #9f9f9f;
      font-weight: 400;

      .el-tag {
        position: absolute;
      }
    }
  }
}

.class-cell-top {
  margin-bottom: 6px;
  span {
    &:first-child {
      font-size: 15px;
      font-weight: bold;
      color: #409eff;
    }
    &:last-child {
      font-size: 12px;
      font-weight: 400;
      color: #9f9f9f;
    }
  }
}
// 课表弹出框
.class-poper {
  color: #ffffff;
  .close-btn {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;

    i {
      font-size: 18px;
    }
  }

  .poper-title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 25px;
  }

  .content-item {
    display: flex;
    width: 260px;
    margin-bottom: 15px;

    label {
      width: 70px;
      text-align: end;
    }
  }

  .delete-btn {
    width: 100%;
    margin-top: 10px;
    cursor: pointer;

    i {
      float: right;
      font-size: 16px;
      margin-right: 8px;
    }
  }
}

// 添加课程对话框

// 表单组标题
.form-group-title {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
}
</style>