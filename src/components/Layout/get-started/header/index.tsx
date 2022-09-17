import { Layout, Typography, Image, Space } from "antd";
import styles from "./styles.module.scss";
import Logo from "public/cloudverse-logo.svg";
import { useRouter } from "next/router";

const { Header } = Layout;
const { Text } = Typography;

export const GetStartedHeader = () => {
  const router = useRouter();

  return (
    <Header className={styles.header}>
      <div className={styles["container"]}>
        {/* <Image
          src={logo.src}
          alt='Cloudverse logo'
          preview={false}
          className={styles['touchable-text']}
          onClick={() => router.push('/')}
        /> */}
        <Logo />
      </div>
      <Space size={"large"}>
        <Text className={styles["touchable-text"]}>Help</Text>
        <Text
          className={styles["touchable-text"]}
          onClick={() => router.push("/auth/login")}
        >
          Already have an account?
        </Text>
      </Space>
    </Header>
  );
};
