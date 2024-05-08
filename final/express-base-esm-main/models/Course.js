import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  const Course = sequelize.define(
    'Course',
    {
      course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      course_class_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      course_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course_style: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      quota: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'Course1', // 直接提供資料表名稱
      timestamps: false, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )

  Course.associate = (models) => {
    Course.belongsTo(models.Teacher, {
      foreignKey: 'teacher_id',
      as: 'teacher',
    })
  }

  return Course
}
