import React, { useState } from 'react';
import { Calendar, Alert, Modal, Input } from 'antd';

const App = () => {
  const [notes, setNotes] = useState({});

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const onSelect = (value) => {
    const selectedDate = value.format('YYYY-MM-DD');
    const existingNote = notes[selectedDate];

    Modal.confirm({
      title: 'Not Ekle',
      content: (
        <Input.TextArea
          placeholder="Notunuzu buraya ekleyin"
          rows={4}
          defaultValue={existingNote}
        />
      ),
      onOk: async () => {
        const newNote = document.querySelector('.ant-modal-root .ant-input').value;
        setNotes((prevNotes) => ({ ...prevNotes, [selectedDate]: newNote }));
      },
    });
  };

  const dateCellRender = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    const note = notes[dateString];

    return (
      <div>
        <span>{value.date()}</span>
        {note && <Alert message={note} type="info" showIcon />}
      </div>
    );
  };

  return (
    <div>
      <Calendar onPanelChange={onPanelChange} onSelect={onSelect} dateCellRender={dateCellRender} />
    </div>
  );
};

export default App;
