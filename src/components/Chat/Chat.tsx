import React, { ReactElement } from 'react'
import styled from 'styled-components'

type IChatProps = {
className?:string
}

const  Chat = (props: IChatProps): ReactElement => {
    const {className} = props
    return (
        <div className={className}>
            <div className="chat-widget">
                <div className="tab-content">
                    <div className="content-box">
                        <strong className="heading-box">New Conversation <span className="close"></span></strong>
                        <div className="scrolled-area">
                            <div className="content-area">
                                <span className="title-text">To server you better, please answer the following questions: </span>
                                <form action="#" className="form">
                                    <div className="field">
                                        <label htmlFor="name">Name <span className="required">*</span></label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" id="message"></textarea>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="date">Date</label>
                                        <input type="text" className="form-control" id="date" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="time">Time</label>
                                        <input type="text" className="form-control" id="time" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="select">Select an option</label>
                                        <span className="fake-select" id="select">
                                            <select>
                                                <option>Option Item 1</option>
                                                <option>Option Item 2</option>
                                                <option>Option Item 3</option>
                                                <option>Option Item 4</option>
                                            </select>
                                        </span>
                                    </div>
                                    <button type="submit" className="button-primary">Start Chat</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="content-box  d-none">
                        <strong className="heading-box heading-box__user-status">
                            <span className="img-holder">
                                <img src="https://via.placeholder.com/350x150" alt="profile image" />
                            </span>
                            <span className="title">Conversation</span>
                            <span className="status active">Noah</span>
                            <span className="close"></span>
                        </strong>
                        <div className="scrolled-area">
                            <div className="d-flex align-items-end flex-direction-column h-100">
                                <div className="content-area">
                                    <div className="chat-text sender">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text sender">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                    <div className="chat-text">
                                        <p>Please be patient while you are being conneted with an operator ...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message-box">
                            <span className="more-options"></span>
                            <input type="text" placeholder="Your message" />
                        </div>
                    </div>
                </div>
                <div className="bottom-area">
                    <ul className="tabset">
                        <li><a href="#">Chat</a></li>
                        <li><a href="#" className="active">FAQ</a></li>
                        <li><a href="#">Ticket</a></li>
                        <li><a href="#">Callbak</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default  styled(Chat)`
    .d-none {
        display: none !important;
    }
    .chat-widget {
        position: fixed;
        left: 15px;
        bottom: 15px;
        width: 370px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0, 0.2);
        border-radius: 10px;

        .heading-box {
            display: block;
            background: #6f6f6f;
            color: #fff;
            padding: 15px 40px 15px 15px;
            position: relative;

            &__user-status {
                padding-left: 70px;
            }

            .img-holder {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translate(0, -50%);
                border-radius: 100%;
                width: 50px;
                height: 50px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .title {
                display: block;
            }

            .status {
                display: block;
                font-weight: 400;
                position: relative;
                padding: 0 0 0 12px;

                &.active {
                    &:before {
                        background: #8fd82d;
                    }
                }

                &:before {
                    position: absolute;
                    left: 0;
                    top: 6px;
                    width: 6px;
                    height: 6px;
                    border-radius: 100%;
                    background: #e4e4e4;
                    content: '';
                }
            }

            .close {
                position: absolute;
                right: 15px;
                top: 12px;
                width: 20px;
                height: 20px;
                cursor: pointer;

                &:before,
                &:after {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 10px;
                    content: '';
                    height: 3px;
                    background: #fff;
                    transform: rotate(45deg);
                }

                &:after {
                    transform: rotate(-45deg);
                }
            }
        }

        .tabset {
            margin: 0;
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: row;
            text-align: center;
            border: 1px solid #d7d7d7;
            border-radius: 10px;
            background: #fff;

            li {
                flex: 1;
                border-left: 1px solid #d7d7d7;

                &:first-child {
                    border: none;
                }
            }

            a {
                display: block;
                color: #3d3d3d;
                padding: 15px;
                text-decoration: none;
                transition: all 0.4s ease;

                &.active,
                &:hover {
                    background: #e4e4e4;
                }
            }
        }

        .scrolled-area {
            height: 400px;
            overflow: auto;
        }

        .bottom-area {
            padding: 10px;
            background: #eee;
        }

        .content-area {
            padding: 15px;
        }

        .field {
            margin: 0 0 20px;
        }

        .h-100 {
            min-height: 100%;
        }

        label {
            display: inline-block;
            vertical-align: top;
            font-weight: 700;
            color: #000;
            margin: 0 0 5px;
        }

        textarea {
            &.form-control {
                resize: none;
                height: 80px;
            }
        }

        .form-control {
            padding: 10px 15px;
            width: 100%;
            border: none;
            outline: none;
            height: 40px;
            border-radius: 4px;
            background: #eee;
        }

        .required {
            color: #f00;
            display: inline-block;
            vertical-align: top;
        }

        .title-text {
            display: block;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 0 15px;
        }

        select {
            width: 100%;
            border: none;
            outline: none;
            height: 40px;
            border-radius: 4px;
            background: #eee;
            padding: 10ox 15px;
        }

        .button-primary {
            display: block;
            margin: 0 0 0 auto;
            background: #6f6f6f;
            color: #fff;
            border: none;
            outline: none;
            height: 40px;
            min-width: 140px;
            border-radius: 4px;
            transition: all 0.4s ease;

            &:hover {
                background: #000;
            }
        }

        .message-box {
            border-top: 1px solid #ebebeb;
            padding-left: 40px;
            position: relative;

            input[type="text"] {
                width: 100%;
                padding: 15px;
                border: none;
                outline: none;
            }

            .more-options {
                width: 26px;
                height: 26px;
                background: #585858;
                border-radius: 100%;
                position: absolute;
                left: 10px;
                top: 10px;

                &:after,
                &:before {
                    position: absolute;
                    width: 14px;
                    height: 2px;
                    background: #fff;
                    border-radius: 4px;
                    content: '';
                    left: 50%;
                    top: 50%;
                    margin: -1px 0 0 -7px;
                }

                &:after {
                    transform: rotate(90deg);
                }
            }
        }

        .d-flex {
            display: flex;
        }

        .align-items-end {
            justify-content: flex-end;
        }

        .flex-direction-column {
            flex-direction: column;
        }

        .chat-text {
            background: #f8f8f8;
            border-radius: 15px;
            padding: 10px;
            font-size: 16px;
            line-height: 22px;
            width: 95%;
            margin: 0 0 15px auto;
            color: #777;

            &.sender {
                margin: 0 0 15px;
            }

            p {
                margin: 0;
            }
        }
    }
`;