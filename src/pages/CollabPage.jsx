import { useParams } from "react-router-dom";

export default function CollabPage() {
  const params = useParams();

  return <div>CollabPage for: {params.name}</div>;
}
