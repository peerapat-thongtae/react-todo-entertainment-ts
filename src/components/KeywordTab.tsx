import React from 'react';
import Tag from './Tag';

const KeywordTab = (props: any) => {
  const { movie } = props;
  return (
    <div>
      {movie.keywords &&
        movie.keywords.keywords &&
        movie.keywords.keywords.map((keyword: any, index: number) => {
          return (
            <Tag
              key={index}
              to={`/keyword/${keyword.id}`}
              title={keyword.name}
            />
          );
        })}
    </div>
  );
};

export default KeywordTab;
