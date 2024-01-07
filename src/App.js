import React, { useState } from 'react';

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}
export const relativeDateTime = () => (Component) => {
  return class extends React.Component {

    currDate() {
      const today = new Date()
      const vidDay = new Date(this.props.date)
      const diffInMs = today.getTime() - vidDay.getTime();
      const daysDiff = Math.round(diffInMs / (1000 * 3600 * 24))
      const hoursDiff = Math.round((diffInMs / (1000 * 60 * 60)))
      const minsDiff = Math.round((diffInMs / (1000 * 60)))
      if (hoursDiff < 1) {
        return minsDiff + " минут назад"
      }

      if (hoursDiff > 24) {
        return daysDiff + " дней назад"
      }
      return hoursDiff + " часов назад"

    }
    
    render() {
      return (
        <Component date={this.currDate().toString()} />
      )
    }
  }
}

export const DateTimePretty = relativeDateTime()(DateTime);


function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/7J4t5gE1JyQ?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}

