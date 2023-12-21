import React, { useState } from 'react';
import { Calendar, Modal, Input, Button } from 'antd';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [note, setNote] = useState('');

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const onDateSelect = (value) => {
    setSelectedDate(value);
    Modal.info({
      title: 'Seçilen Tarih',
      content: (
        <div>
          <p>{value.format('YYYY-MM-DD')}</p>
          <Input
            placeholder="Bir şeyler yazın"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      ),
      onOk() {
        setNote(inputValue);
        setInputValue('');
        setSelectedDate(null);
      },
    });
  };

  return (
    <div>
      <Calendar onPanelChange={onPanelChange} onSelect={onDateSelect} />
      <div style={{ marginTop: '20px' }}>
        {note && (
          <div>
            <h2>Not:</h2>
            <p>{note}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
