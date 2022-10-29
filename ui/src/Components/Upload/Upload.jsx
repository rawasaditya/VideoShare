import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Close,
  Title,
  Input,
  TextArea,
  Button,
  Label,
  Form
} from "./styled";
import axios from 'axios'
import { Upload as UploadAssets, X } from "react-feather";
const Upload = ({ setOpen }) => {
  const [files, setFiles] = useState({
    video: undefined,
    thumbnail: undefined,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const resetForm = () => {
    setOpen(false);
    setFiles({
      video: undefined,
      thumbnail: undefined,
    });
    setTitle("");
    setDescription("");
    setTags("");
  };

  const uploadData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",title);
    formData.append("description",description);
    formData.append("thumbnail",files.thumbnail);
    formData.append("video",files.video);
    formData.append("tags",tags);
    const res = await axios.post("video",formData);
    window.location.href=`/video/${res.data._id}`

  };

  const updateFiles = (type, e) => {
    if (type === "video") {
      setFiles((prev) => {
        return {
          ...prev,
          video: e.target.files[0],
        };
      });
    } else {
      setFiles((prev) => {
        return {
          ...prev,
          thumbnail: e.target.files[0],
        };
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Close>
          <X size={20} onClick={resetForm} />
        </Close>
        <Title>Upload a New Video</Title>
        <Form onSubmit={uploadData}>
        <Label>
          <UploadAssets size={20} />
          {files?.video ? files.video.name : "Select Video"}
          <Input
            type="file"
            accept="video/*"
            style={{  opacity: 0,
                width: 0,
                float: "left",
                padding:0,
                margin:0,height:0
            }}
            onChange={(e) => updateFiles("video", e)}
            required
          />
        </Label>

        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Separate tags with commas."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
        <Label>
          <UploadAssets size={20} />
          {files?.thumbnail ? files.thumbnail.name : "Select Thumbnail"}
          <Input
            type="file"
            accept="image/*"
            style={{  opacity: 0,
                width: 0,
                float: "left",
                padding:0,
                margin:0,height:0
            }}
            required
            onChange={(e) => updateFiles("thumbnail", e)}
          />
        </Label>
        <Button type="submit">Upload</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Upload;
