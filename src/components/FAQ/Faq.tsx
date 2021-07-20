import  { ReactElement } from 'react'
import styled from 'styled-components'
import { LikeIcon } from '../../assets';
import { Header } from '../Header'

type IChatProps = {
  className?: string;
  handleClose?: () => void
};
const Likes = [1,2,3,4,5]
export const  Faq = (props: IChatProps): ReactElement => {
    const { className, handleClose } = props;
    return (
      <div className={className}>
        <div className="content-box">
          <Header title=" Search Knowledge" onClose={handleClose} />

          <div className="scrolled-area">
            <div className="content-area">
              <div className="field">
                <input type="text" placeholder="Type your question here..." />
              </div>
              <div className="question-box">
                <strong className="question">
                  <a href="#">
                    How do I install LiveHelpNow widget code in Google Tag
                    Manager
                  </a>
                </strong>
                <div className="answer-box">
                  <p>
                    Google Tag Manager (GTM) is a simple solution for managing
                    JavaScript snippets that send data to third parties (like
                    LiveHelpNow) from your website or app. You can easily add or
                    remove snippets...
                  </p>
                  <div className="viewers-info">
                    <span className="views">612 views</span>
                    <ul className="list-thumbs">
                      {Likes.map(like => {

                      return <li key={like}>
                        <LikeIcon />
                      </li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default styled(Faq)`
  
`;