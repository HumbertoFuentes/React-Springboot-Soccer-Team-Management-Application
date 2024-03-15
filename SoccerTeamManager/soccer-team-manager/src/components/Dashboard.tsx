import React from 'react';
import NewsCard from './NewsCard';


const Dashboard: React.FC = () => {

  const newsData = [
    {
      title: 'Exciting Match Results!',
      imageUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt26d4ade721656f7c/61cec0ccf5b6fc1164a2ddbe/Lionel_Messi_Barcelona.jpg?auto=webp&format=pjpg&width=1080&quality=60',
      description: 'A summary of the latest match results and highlights.',
      date: '2024-03-07',
      author: 'humberto fuentes'
    },
    {
      title: 'Exciting Match Results!',
      imageUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt26d4ade721656f7c/61cec0ccf5b6fc1164a2ddbe/Lionel_Messi_Barcelona.jpg?auto=webp&format=pjpg&width=1080&quality=60',
      description: 'A summary of the latest match results and highlights.',
      date: '2024-03-07',
      author: 'humberto fuentes'
    },
    {
      title: 'Exciting Match Results!',
      imageUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt26d4ade721656f7c/61cec0ccf5b6fc1164a2ddbe/Lionel_Messi_Barcelona.jpg?auto=webp&format=pjpg&width=1080&quality=60',
      description: 'A summary of the latest match results and highlights.',
      date: '2024-03-07',
      author: 'humberto fuentes'
    },
    {
      title: 'Exciting Match Results!',
      imageUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt26d4ade721656f7c/61cec0ccf5b6fc1164a2ddbe/Lionel_Messi_Barcelona.jpg?auto=webp&format=pjpg&width=1080&quality=60',
      description: 'A summary of the latest match results and highlights.',
      date: '2024-03-07',
      author: 'humberto fuentes'
    },
  ];


  return (
    <div className='container-fluid'>
      <div className="row">
        <h2>Sports News</h2>
        {newsData.map((news, index) => (
          <div className='col'>
            {/* should be clickable and take me to the article */}
            <NewsCard key={index} {...news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;