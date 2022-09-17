import { Layout, Menu, MenuProps } from "antd";

import AvaFooterCard from "../ava-footer-card";
import BellSvg from "public/asset/icons/bell.svg";
import BudgetSvg from "public/asset/icons/budget.svg";
import CostSvg from "public/asset/icons/cost.svg";
import HelpSvg from "public/asset/icons/question.svg";
import HomeSvg from "public/asset/icons/home.svg";
import LogoSvg from "public/asset/logo/cloudverse-colored.svg";
import ProjectSvg from "public/asset/icons/project.svg";
import React from "react";
import RecommendationSvg from "public/asset/icons/recommendation.svg";
import { SettingOutlined } from "@ant-design/icons";
import SettingSvg from "public/asset/icons/setting.svg";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const { Sider } = Layout;

const sideData: MenuProps["items"] = [
  {
    icon: <HomeSvg />,
    label: "Home",
    key: "/dashboard",
  },
  {
    icon: <ProjectSvg />,
    label: "Assets",
    key: "/assets",
  },
  {
    icon: <CostSvg />,
    label: "Costs",
    key: "/cost",
  },
  {
    icon: <BudgetSvg />,
    label: "Governance",
    key: "/governance",
  },
  {
    icon: <RecommendationSvg />,
    label: "Recommendations",
    key: "/recommendations",
    disabled: true,
  },
  {
    icon: <BellSvg />,
    label: "Notifications",
    key: "/notifications",
    disabled: true,
  },
  {
    icon: <HelpSvg />,
    label: "Help",
    key: "/help",
    disabled: true,
  },
  {
    icon: <SettingSvg />,
    label: "Settings",
    key: "/settings",
    disabled: true,
  },
  {
    icon: <SettingOutlined />,
    label: "Components",
    key: "/components",
  },
];
export const DashboardSider = () => {
  const router = useRouter();

  const onMenuClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <Sider className={styles.sider} collapsible={false}>
      <div className={styles.content}>
        <div>
          <div
            className={styles.logo}
            onClick={() => router.push("/dashboard")}
          >
            <LogoSvg />
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/dashboard"]}
            selectedKeys={[router.pathname]}
            onClick={onMenuClick}
            items={sideData}
          />
        </div>
        <div className={styles.footer}>
          <AvaFooterCard />
        </div>
      </div>
    </Sider>
  );
};
