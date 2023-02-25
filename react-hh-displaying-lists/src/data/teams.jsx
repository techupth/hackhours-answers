/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const teams = [
  {
    id: "A-100",
    name: "TechUp",
    children: [
      {
        id: "A-001-1",
        name: "Diya",
      },
      {
        id: "A-001-2",
        name: "Beatriz",
      },
    ],
  },
  {
    id: "B-100",
    name: "Bacon",
    children: [],
  },
  {
    id: "C-100",
    name: "Vitamilk",
    children: [
      {
        id: "C-001-1",
        name: "Milo",
      },
    ],
  },
];

function Teams() {
  return (
    <div>
      {teams.map((item, index) => {
        return (
          <div key={index}>
            <div
              css={css`
                width: 381px;
                height: 69px;
                background: #ffffff;
                box-shadow: 0px 4px 40px rgba(145, 124, 124, 0.25);
                border-radius: 10px;
                padding: 18px 0 25px 25px;
                font-family: "Kanit";
                font-size: 20px;
                margin-bottom: 32px;
              `}
            >
              {item.name} Team ({item.id})
            </div>
            <div>
              {item.children.map((subItem, i) => {
                return (
                  <div
                    key={i}
                    css={css`
                      width: 381px;
                      height: 69px;
                      background: #ffffff;
                      box-shadow: 0px 4px 40px rgba(145, 124, 124, 0.25);
                      border-radius: 10px;
                      padding: 18px 0 25px 25px;
                      font-family: "Kanit";
                      font-size: 20px;
                      margin-left: 62px;
                      margin-bottom: 32px;
                    `}
                  >
                    {subItem.name} Team ({subItem.id})
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Teams;
