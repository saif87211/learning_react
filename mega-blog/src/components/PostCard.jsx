import appWriteService from "../appwrite/dbStorageConfig";
import { Link } from "react-router-dom";

export default function PostCard({ $id, title, featureImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appWriteService.getPreviewFile(featureImage)} className="rounded-xl" alt={title} />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}
