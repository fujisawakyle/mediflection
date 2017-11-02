import { injectGlobal } from 'styled-components';
import media from '../styles/media';

injectGlobal`

body {
    background: linear-gradient(to left top, #1687c0, #040711) fixed;
    color: white;
    font-family: 'Bungee Hairline', cursive;
    margin: 0;
}

h1, h2, h3, h4 {
    margin: 0;
    padding: 0.3em;
}

h1 {
  font-size: 1.9em;
  ${media.xs`
    font-size:2.5em;
  `}
}

h3 {
  font-size: 0.9em;
  ${media.xs`
    font-size:1em;
  `}
}

a {
    color: white;
    text-decoration: none;

}
a:hover {
    text-decoration: underline;
}

textarea {
  resize: none;
}

.DayPicker {
    display: inline-block;
  }
  
.DayPicker-wrapper {
  outline-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;
  flex-direction: row;
  padding: 1rem 0;
  position: relative;
}

.DayPicker-Month {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  user-select: none;
  margin: 0 1rem;
  color: white;
}

.DayPicker-NavBar {
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 0.5rem;
  top: 0rem;
  color: white;
}

.DayPicker-NavButton {
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  fill: white;
}

.DayPicker-NavButton--prev {
  left: 1.5em;
  top: 1em;
  width: 1.5em;
  height: 1.5em;
  background-color: rgba(255,255,255,0.6);
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDI2IDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4zLjIgKDEyMDQzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5wcmV2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9InByZXYiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjM5MzE5MywgMjUuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMy4zOTMxOTMsIC0yNS4wMDAwMDApIHRyYW5zbGF0ZSgwLjg5MzE5MywgMC4wMDAwMDApIiBmaWxsPSIjNTY1QTVDIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsNDkuMTIzNzMzMSBMMCw0NS4zNjc0MzQ1IEwyMC4xMzE4NDU5LDI0LjcyMzA2MTIgTDAsNC4yMzEzODMxNCBMMCwwLjQ3NTA4NDQ1OSBMMjUsMjQuNzIzMDYxMiBMMCw0OS4xMjM3MzMxIEwwLDQ5LjEyMzczMzEgWiIgaWQ9InJpZ2h0IiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");
}

.DayPicker-NavButton--next {
  right: 1.5rem;
  top: 1em;
  width: 1.5em;
  height: 1.5em;
  background-color: rgba(255,255,255,0.7);
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDI2IDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4zLjIgKDEyMDQzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5uZXh0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9Im5leHQiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTUxNDUxLCAwLjAwMDAwMCkiIGZpbGw9IiM1NjVBNUMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCw0OS4xMjM3MzMxIEwwLDQ1LjM2NzQzNDUgTDIwLjEzMTg0NTksMjQuNzIzMDYxMiBMMCw0LjIzMTM4MzE0IEwwLDAuNDc1MDg0NDU5IEwyNSwyNC43MjMwNjEyIEwwLDQ5LjEyMzczMzEgTDAsNDkuMTIzNzMzMSBaIiBpZD0icmlnaHQiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=");
}

.DayPicker-NavButton--interactionDisabled {
  display: none;
}

.DayPicker-Caption {
  display: table-caption;
  height: 1.5rem;
  text-align: center;
}

.DayPicker-Weekdays {
  display: table-header-group;
}

.DayPicker-WeekdaysRow {
  display: table-row;
}

.DayPicker-Weekday {
  display: table-cell;
  padding: 0.1rem;
  padding-top: 1em;
  font-size: 0.875em;
  text-align: center;
  color: white;
  abbr {
    cursor: default;
    text-decoration:none;
  }
}
  
  .DayPicker-Body {
    display: table-row-group;
  }
  
  .DayPicker-Week {
    display: table-row;
  }
  
  .DayPicker-Day {
    display: table-cell;
    padding: 2vw 2.2vw;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    ${media.xs`
      padding: 2vw 3.5vw;
    `}
    ${media.sm`
      padding: 2vw 4vw;  
    `}
    ${media.md`
      padding: 2.2vw 2.2vw;
    `}
    ${media.lg`
    padding: 1.4em;
  `}
  }
  
  .DayPicker-WeekNumber {
    display: table-cell;
    padding: 0.5rem;
    text-align: right;
    vertical-align: middle;
    min-width: 1rem;
    font-size: 0.75em;
    cursor: pointer;
    color: #8b9898;
  }
  
  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }
  
  .DayPicker-Footer {
    display: table-caption;
    caption-side: bottom;
    padding-top: 1.5rem;
  }
  
  .DayPicker-TodayButton {
    border: none;
    background-color: #4a90e2;
    box-shadow: none;
    cursor: pointer;
    text-shadow: 0 0 10px rgba(0,0,0,0.9);
    color: white;
    font-size: 0.8em;
    position: absolute;
    left: 50%;
    bottom: 2.1%;
    transform: translateX(-50%);
    font-family: 'Bungee Hairline', cursive;
  }
  
  /* Default modifiers */
  
  .DayPicker-Day--disabled {
    color: #dce0e0;
    cursor: default;
    background-color: #eff1f1;
  }
  
  .DayPicker-Day--outside {
    cursor: default;
    color: #7d7d7d;
  }
  
  /* Example modifiers */
  
  .DayPicker-Day--sunday {
    background-color: #f7f8f8;
  }
  
  .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #dce0e0;
  }
  
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    color: #fff;
    background-color: rgba(74, 144, 226, 0.68);
  }
  
  .DayPicker-Day:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    border: 2px solid white;
  }
  
  .DayPicker-Day--today {
    border: 2px solid rgba(4, 199, 255, 0.89);
    font-weight: 500;
  }

`;
