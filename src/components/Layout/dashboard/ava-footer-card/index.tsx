import { Avatar, Dropdown, Image, Layout, Menu, Space, Typography } from "antd";
import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import avatar from "public/avatar.png";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const { Text } = Typography;

const AvaFooterCard = () => {
  const router = useRouter();
  const onLogOut = () => {
    router.push("/auth/login");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Space onClick={onLogOut}>
              <LogoutOutlined className={styles.icon} />
              <Text className={styles.label}>Logout</Text>
            </Space>
          ),
        },
      ]}
      className={styles["menu-item"]}
    />
  );

  return (
    <div className={styles["ava-card-container"]}>
      <Dropdown overlay={menu} placement={"topLeft"} arrow trigger={["click"]}>
        <div className={styles["ava-container"]}>
          <Avatar src={avatar.src} size="small" className={styles.avatar} />
        </div>
      </Dropdown>
      <div className={styles.info}>
        <Text className={styles.name}>Nguyen Doan Phuong Nghi</Text>
        <Text className={styles.mail}>nghindp@vng.com.vn</Text>
      </div>
    </div>
  );
};

export default AvaFooterCard;
