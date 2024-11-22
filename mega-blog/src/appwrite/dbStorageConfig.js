import config from "../config/config.js";
import { Client, Databases, Storage, ID, Query } from "appwrite";

class DbStorageConfig {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.database.createDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    user: userId
                });
        } catch (error) {
            console.log("Appwrite service :: createPost: error ", error);
        }
    }

    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug,
                { title, content, featureImage, status });
        } catch (error) {
            console.log("Appwrite service :: updatePost: error ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost: error ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                config.appwriteDbId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost: error ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                config.appwriteDbId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts: error ", error);
            return false;
        }
    }

    //File upload Sevices
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log("Appwrite service :: uploadFile: error ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile: error ", error);
            return false;
        }
    }

    getPreviewFile(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
    }
}

const dbStorageConfig = new DbStorageConfig();

export default dbStorageConfig;