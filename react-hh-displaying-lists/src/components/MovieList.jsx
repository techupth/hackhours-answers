/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { movies } from "../data/movies";

function MoviesList() {
  return (
    <div>
      {movies.map((item, index) => {
        return (
          <div
            key={index}
            css={css`
              display: flex;
              background-color: #ffffff;
              height: 250px;
              border-radius: 10px;
              padding: 18px 14px 18px 14px;
              box-shadow: 0px 4px 40px rgba(145, 124, 124, 0.25);
              margin-bottom: 80px;
            `}
          >
            <div>
              <img
                src={item.image}
                css={css`
                  width: 102px;
                  height: 100px;
                  object-fit: cover;
                  border-radius: 10px;
                `}
              ></img>
            </div>
            <div
              css={css`
                margin-left: 20px;
                font-size: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <div>Title: {item.title}</div>
              <div>Year: {item.year}</div>
              <div>Runtime: {item.runtime}</div>
              <div
                css={css`
                  display: flex;
                `}
              >
                Genres:
                {item.genres.map((genre, i) => {
                  return (
                    <div
                      key={i}
                      css={css`
                        background-color: #eaac99;
                        border-radius: 10px;
                        font-size: 16px;
                        padding-left: 10px;
                        padding-right: 10px;
                        margin-left: 10px;
                        margin-top: 5px;
                      `}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
              <div>IMDB Ratings: {item.imdbRating}</div>
              <div>IMDB Votes: {item.imdbVotes}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MoviesList;
