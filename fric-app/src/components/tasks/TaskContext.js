/**
 * 
 */

import { createContext } from 'react';

<<<<<<< HEAD
export const TaskContext = createContext(null);
=======
export const TaskNameContext = createContext(null);
export const TaskDescriptionContext = createContext(null);
export const TaskProgressContext = createContext(null);
export const TaskPriorityContext = createContext(null);
export const TaskRelatedTasksContext = createContext(null);
export const TaskAnalystsContext = createContext(null);
export const TaskCollaboratorsContext = createContext(null);
export const TaskDueDateContext = createContext(null);
<<<<<<< HEAD
>>>>>>> 72406b3a... Created react contexts to pass states to nested task components. Implemented NewTaskDialog window.
=======
export const TaskAttachmentContext = createContext(null);
export const TaskArchivedContext = createContext(null);
>>>>>>> 61b3428c... Reimplemented task detail view with context data. Added TaskForm as it's child.
