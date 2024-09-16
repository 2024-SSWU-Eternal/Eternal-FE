import React, { useEffect, useState } from 'react'
import Back from '../../assets/img/announce/back.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Imgbtn from '../../assets/img/announce/img_btn.svg';

const AnnonceWrite = () => {
    const URL = 'https://www.eternal-server.store';

    const [click, setClick] = useState('');
    const [section, setSection] = useState('공지사항 등록');
    const [btntext, setBtnText] = useState('등록');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
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
            setSection('공지사항 수정')
            setBtnText('수정')
        }
    }, [])

    const onWrite = async () => {
        if (!(title && content)) {
            alert('제목과 내용을 입력해주세요!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('userId', 'sswulion');
        if (file) {
            formData.append('images', file);
        }

        try {
            const response = await fetch(`${URL}/notices/create`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('공지사항이 성공적으로 등록되었습니다.');
                navigation('/announce/manager');
            } else {
                alert('공지사항 등록에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('서버에 오류가 발생했습니다.');
        };

    };


    return (
        <div className='AnnonceWrite_wrap container'>
            <div className="header">
                <button className="back" onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
                <h4>{section}</h4>
            </div>
            <div className="main">
                <div className="title_box">
                    <p>제목</p>
                    <input
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className={click === 'title' ? 'border' : ''}
                        type="text"
                        onClick={() => { setClick('title') }}
                    />
                    <p className='count'>{title.length}/1,500</p>
                </div>
                <div className="content_box">
                    <p>내용</p>
                    <textarea
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                        className={click === 'content' ? 'border' : ''}
                        name="content"
                        id="content"
                        onClick={() => { setClick('content') }}
                    ></textarea>
                    <p className='count'>{content.length}/1,500</p>
                </div>
                <div className="img_box">
                    <p>첨부파일</p>
                    <input
                        type="file"
                        id="input_img"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                            setFileName(e.target.files[0].name);
                        }}
                    />
                    <label htmlFor="input_img">
                        <img src={Imgbtn} alt="input img button" style={{ cursor: 'pointer' }} />
                    </label>
                    <p className="imgName">{fileName}</p>
                </div>
            </div>
            <button className={all ? 'full' : ''} onClick={() => { onWrite() }}>{btntext}</button>
        </div>
    );
};

export default AnnonceWrite;