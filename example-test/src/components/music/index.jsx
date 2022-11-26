import React from 'react';

import './style.scss'

const Music = props => {

    // const { } = props.music;

    return (
        <div>
            <h2>Người anh em - Châu Khải Phong</h2>
            <p>Sáng tác: Nhạc Hoa, Lời Việt: Mạnh Thắng | Thể loại: Nhạc Dance | Lượt nghe: 163.005 | Lượt tải: 1221</p>
            <input className="progress" type="range" />
        </div>
    );
};


export default Music;