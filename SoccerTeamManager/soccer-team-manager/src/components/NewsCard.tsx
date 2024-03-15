import React from "react";
import "../styles/styles.css";

interface NewsCardProps {
    title : string;
    imageUrl : string;
    description : string
    date : string
}

const NewsCard: React.FC<NewsCardProps> = ({title, imageUrl, description, date}) => {
    return (
        <div className="card news-card">
            <div className="image-container">
                <img src={imageUrl} className="card-img-top" alt="article-image"/>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-footer text-center">
                <h6 className="card-text">{date}</h6>
            </div>
        </div>
    );
  };
  
  export default NewsCard;