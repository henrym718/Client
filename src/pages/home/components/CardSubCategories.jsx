import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function CardSubCategories({ key, url, title, description }) {
  return (
    <Link to='/newgig'>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={url} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Link>
  );
}
