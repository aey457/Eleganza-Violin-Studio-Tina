import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  const Teacher = sequelize.define(
    'Teacher',
    {
      teacher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      t_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      onsite_teacher: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      t_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      t_years: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      education: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      courses: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      introduction: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      experience: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'Teacher1', // 直接提供資料表名稱
      timestamps: false, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用 snake_case 命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )

  return Teacher
}
