import { injectGlobal } from 'styled-components';
import media from '../styles/media';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Bungee+Hairline');

    body {
        background: linear-gradient(to left top, #1687c0, #040711) fixed;
        color: white;
        font-family: 'Bungee Hairline', cursive;
        margin: 0;
    }

    h1, h2, h3, h4 {
        margin: 0;
        padding: 0.5em;
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
    background-image: url("../images/svg/left-cal-arrow.svg");
  }
  
  .DayPicker-NavButton--next {
    right: 1.5rem;
    top: 1em;
    background-image: url('../images/svg/right-cal-arrow.svg');
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
    //border: 1px solid #000;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    ${media.xs`
    padding: 2vw 3.5vw;
    `}
    ${media.sm`
    padding: 2vw 4vw;  
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
    background-color: blue;
    box-shadow: none;
    cursor: pointer;
    color: white;
    font-size: 0.8em;
    position: absolute;
    left: 32%;
    top: 89.5%;
  }
  
  /* Default modifiers */
  
  .DayPicker-Day--disabled {
    color: #dce0e0;
    cursor: default;
    background-color: #eff1f1;
  }
  
  .DayPicker-Day--outside {
    cursor: default;
    color: #dce0e0;
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
    border: 2px solid green;
    font-weight: 500;
  }
  .DayPicker-Day--today:focus {
    color: #fff;
    font-weight: 500;
    //border:2px solid green;
  }
  
  /* DayPickerInput */
  
  .DayPickerInput {
    display: inline-block;
  }
  
  .DayPickerInput-OverlayWrapper {
    position: relative;
  }
  
  .DayPickerInput-Overlay {
    left: 0;
    position: absolute;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  
`;
