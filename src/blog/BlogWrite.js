import React, { useEffect, useState } from "react";
import "./style.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isSuccess, isLoading, isFailing } from ".././redux/slice/auth";
import axios from "axios";
const BlogWrite = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [title, setTitle] = useState("");
    const [meta, setMeta] = useState("");
    const [content, setContent] = useState("");
    const handleChange = (data) => {
        setEditorState(data);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }, [editorState]);

    const handleCreateNewBlog = async () => {
        if (!title || !meta || !content) {
            return toast.error("Vui lòng điền hết thông tin.");
        }
        dispatch(isLoading());
        console.log({
            token: auth.user?.accessToken,
            title: title,
            meta: meta,
            content: content,
        });
        try {
            const data = await axios.post("/api/blog/create", {
                token: auth.user?.accessToken,
                title: title,
                meta: meta,
                content: content,
            });
            toast.success(data?.data?.msg);
            dispatch(isSuccess());
        } catch (err) {
            toast.error(err?.response?.data?.msg);
            dispatch(isFailing());
        }
    };

    return (
        <div className="newPost">
            <div className="newPost_title">
                <div
                    className="newPost_title_edit"
                    contentEditable={true}
                    onInput={(e) => {
                        setTitle(e.target.innerHTML);
                    }}
                ></div>
                {!title && <div className="newPost_title_content">Tiêu đề</div>}
            </div>
            <div className="newPost_title">
                <div
                    className="newPost_title_edit_meta"
                    contentEditable={true}
                    onInput={(e) => {
                        setMeta(e.target.innerHTML);
                    }}
                ></div>
                {!meta && (
                    <div className="newPost_title_content_meta">
                        Nội dung nhỏ
                    </div>
                )}
            </div>
            <div className="newPost_content">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleChange}
                    wrapperClassName="editor-wrapper"
                    editorClassName="message-editor"
                    toolbarClassName="message-toolbar"
                />
                {!convertToRaw(editorState.getCurrentContent())?.blocks[0]
                    ?.text && (
                    <div className="newPost_content_title">
                        Nội dung viết tại đây
                    </div>
                )}
            </div>
            <div className="newPost_update">
                <button onClick={handleCreateNewBlog}>
                    <i
                        style={{ marginRight: "0.5rem", fontSize: "1.3rem" }}
                        className="fa-solid fa-upload"
                    ></i>
                    Đăng
                </button>
            </div>
        </div>
    );
};

export default BlogWrite;
