import "./Exercise1.css";
import { getCurrentDateTime } from "../utils.js";

function Exercise1() {
  const articleStyles = {
    container: "article",
    title: "article-title",
    body: "article-body",
    link: "article-link",
  };

  return (
    <div className={articleStyles.container}>
      <h3 className={articleStyles.title}>TechUp Thailand</h3>
      <p className={articleStyles.body}>
        เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน
      </p>
      <a
        className={articleStyles.link}
        href="https://www.techupth.com/"
        target="blank"
      >
        techupth.com
      </a>
      <div className="bootcamp-start-time">
        วันเวลาเริ่มหลักสูตร คือ {getCurrentDateTime()}{" "}
      </div>
    </div>
  );
}

export default Exercise1;
