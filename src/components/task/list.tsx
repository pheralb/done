import { useState, useEffect, useRef } from "react";
import { useTask } from "@/context/taskContext";
import TaskItem from "@/components/task/item";
import { AnimatePresence, motion } from "framer-motion";

const TaskList = () => {
  const { tasksData } = useTask();
  const hasRenderedRemindersRef = useRef(false);
  const [reminders, setReminders] = useState(null);

  useEffect(() => {
    if (reminders) {
      hasRenderedRemindersRef.current = true;
    } else {
      hasRenderedRemindersRef.current = false;
    }
  }, [reminders]);

  return (
    <>
      <AnimatePresence>
        {tasksData.tasks.map((task, i) => (
          <motion.div
            variants={{
              hidden: (i) => ({
                opacity: 0,
                y: -3 * i,
              }),
              visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.025,
                },
              }),
              removed: {
                opacity: 0,
              },
            }}
            initial={hasRenderedRemindersRef.current ? "visible" : "hidden"}
            animate="visible"
            exit="removed"
            custom={i}
            key={task.id}
            data-testid="reminder"
          >
            <TaskItem key={task.id} {...task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default TaskList;
