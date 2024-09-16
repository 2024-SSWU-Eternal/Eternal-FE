import React, { useEffect, useState } from 'react';
import Back from '../../assets/img/announce/back.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Imgbtn from '../../assets/img/announce/img_btn.svg';
import axios from 'axios';

const AnnonceWrite = () => {
    const URL = 'https://www.eternal-server.store';
    const [data, setData] = useState({}); // 초기 상태를 빈 객체로 설정
    const [click, setClick] = useState('');
    const [section, setSection] = useState('공지사항 등록');
    const [btntext, setBtnText] = useState('등록');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [all, setAll] = useState(false);
    const navigation = useNavigate();
    const params = useParams();

    const onBack = () => {
        navigation(-1);
    };

    useEffect(() => {
        if (title && content) {
            setAll(true);
        } else {
            setAll(false);
        }
    }, [title, content]);

    useEffect(() => {
        if (params.modify === 'modify') {
            setSection('공지사항 수정');
            setBtnText('수정');

            axios.get(`${URL}/notices/${params.board}`)
                .then((res) => {
                    if (res.status === 200) {
                        setData(res.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [params]);

    useEffect(() => {
        if (data.title !== undefined) {
            setTitle(data.title || '');
        }
        if (data.content !== undefined) {
            setContent(data.content || '');
        }
    }, [data]);

    const onWrite = async () => {
        if (!(title && content)) {
            alert('제목과 내용을 입력해주세요!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('userId', 'sswulion');
        files.forEach(file => formData.append('images', file));

        const endpoint = params.modify === 'modify'
            ? `${URL}/notices/${params.board}`
            : `${URL}/notices/create`;

        const method = params.modify === 'modify' ? axios.put : axios.post;

        try {
            const response = await method(endpoint, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.status === 200) {
                alert(params.modify === 'modify' ? '공지사항을 성공적으로 수정했습니다.' : '공지사항이 성공적으로 등록되었습니다.');
                navigation('/announce/manager');
            } else {
                alert(params.modify === 'modify' ? '공지사항 수정에 실패했습니다.' : '공지사항 등록에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error:', error);

            if(error.status === 413){
                alert('사진의 용량이 너무 큽니다.');
            } else {
                alert('서버에 오류가 발생했습니다.');
            }
        }
    };

    return (
        <div className='AnnonceWrite_wrap container'>
            <div className="header">
                <button className="back" onClick={onBack}><img src={Back} alt="back button" /></button>
                <h4>{section}</h4>
            </div>
            <div className="main">
                <div className="title_box">
                    <p>제목</p>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={click === 'title' ? 'border' : ''}
                        type="text"
                        onClick={() => setClick('title')}
                    />
                    <p className='count'>{title.length}/1,500</p>
                </div>
                <div className="content_box">
                    <p>내용</p>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className={click === 'content' ? 'border' : ''}
                        name="content"
                        id="content"
                        onClick={() => setClick('content')}
                    ></textarea>
                    <p className='count'>{content.length}/1,500</p>
                </div>
                <div className="img_box">
                    <p>첨부파일</p>
                    <input
                        type="file"
                        id="input_img"
                        multiple
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setFiles(prevFiles => [
                                ...prevFiles,
                                ...[...e.target.files]
                            ]);
                            setFileNames(prevFileNames => [
                                ...prevFileNames,
                                ...[...e.target.files].map(file => file.name)
                            ]);
                        }}
                    />
                    <label htmlFor="input_img">
                        <img src={Imgbtn} alt="input img button" style={{ cursor: 'pointer' }} />
                    </label>
                    <p className="imgName">{fileNames.join(', ')}</p>
                </div>
            </div>
            <button className={all ? 'full' : ''} onClick={onWrite}>{btntext}</button>
        </div>
    );
};

export default AnnonceWrite;
