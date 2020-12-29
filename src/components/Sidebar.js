import React from 'react';

import SetList from './SetList';
import SidebarHeader from './SidebarHeader';

const Sidebar = ({
  flashcards,
  setFlashcards,
  flashcardSets,
  setFlashcardSets,
  currentSet,
  setCurrentSet,
  currentFlashcardIndex,
  setCurrentFlashcardIndex,
}) => {
  return (
    <div className="sidebar">
      <SidebarHeader
        flashcardSets={flashcardSets}
        currentSet={currentSet}
        setFlashcardSets={setFlashcardSets}
      />
      <SetList
        flashcards={flashcards}
        setFlashcards={setFlashcards}
        currentSet={currentSet}
        setCurrentSet={setCurrentSet}
        flashcardSets={flashcardSets}
        setFlashcardSets={setFlashcardSets}
        currentFlashcardIndex={currentFlashcardIndex}
        setCurrentFlashcardIndex={setCurrentFlashcardIndex}
      />
      <div className="sidebar__bottom"></div>
    </div>
  );
};

export default Sidebar;
