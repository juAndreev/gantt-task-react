// import React, { PropsWithChildren, useCallback } from "react";
//
// import { getProgressPoint } from "../../../helpers/bar-helper";
// import { BarDisplay } from "./bar-display";
// import { BarDateHandle } from "./bar-date-handle";
// import { BarProgressHandle } from "./bar-progress-handle";
// import type { TaskItemProps } from "../task-item";
// import type { BarMoveAction } from "../../../types/gantt-task-actions";
//
// import styles from "./bar.module.css";
// import stylesRelationHandle from "../bar-relation/bar-relation-handle.module.css";
// import { ProjectDisplay } from "../project/project-display";
//
// export const BarDefault: React.FC<
//   TaskItemProps & {
//     onLeftRelationTriggerMouseDown: () => void;
//     onRightRelationTriggerMouseDown: () => void;
//     onTaskEventStart: (action: BarMoveAction, clientX: number) => void;
//   } & PropsWithChildren
// > = ({
//   children: relationHandles,
//   distances: { barCornerRadius, handleWidth },
//   hasChildren,
//   isCritical,
//   isDateChangeable,
//   isProgressChangeable,
//   isSelected,
//   onTaskEventStart,
//   progressWidth,
//   progressX,
//   rtl,
//   task,
//   taskHalfHeight,
//   taskHeight,
//   taskYOffset,
//   width,
//   x1,
//   x2,
// }) => {
//   const startMoveFullTask = useCallback(
//     (clientX: number) => {
//       onTaskEventStart("move", clientX);
//     },
//     [onTaskEventStart]
//   );
//
//   const startMoveStartOfTask = useCallback(
//     (clientX: number) => {
//       onTaskEventStart("start", clientX);
//     },
//     [onTaskEventStart]
//   );
//
//   const startMoveEndOfTask = useCallback(
//     (clientX: number) => {
//       onTaskEventStart("end", clientX);
//     },
//     [onTaskEventStart]
//   );
//
//   const startMoveProgress = useCallback(
//     (clientX: number) => {
//       onTaskEventStart("progress", clientX);
//     },
//     [onTaskEventStart]
//   );
//
//   const progressPoint = getProgressPoint(
//     +!rtl * progressWidth + progressX,
//     taskYOffset,
//     taskHeight
//   );
//   const handleHeight = taskHeight - 2;
//
//   let barDisplay: React.ReactNode | undefined;
//   if (task.type === "project") {
//     barDisplay = (
//       <ProjectDisplay
//         customStyle={task.style}
//         taskName={task.name}
//         x1={x1}
//         x2={x2}
//         taskYOffset={taskYOffset}
//         width={width}
//         taskHeight={taskHeight}
//         taskHalfHeight={taskHalfHeight}
//         progressX={progressX}
//         progressWidth={progressWidth}
//         barCornerRadius={barCornerRadius}
//         isSelected={isSelected}
//         isCritical={isCritical}
//         hasChildren={hasChildren}
//         startMoveFullTask={startMoveFullTask}
//       />
//     );
//   } else {
//     barDisplay = (
//       <BarDisplay
//         customStyle={task.style}
//         taskId={task.id}
//         x={x1}
//         y={taskYOffset}
//         width={width}
//         height={taskHeight}
//         progressX={progressX}
//         progressWidth={progressWidth}
//         barCornerRadius={barCornerRadius}
//         isSelected={isSelected}
//         isCritical={isCritical}
//         hasChildren={hasChildren}
//         startMoveFullTask={startMoveFullTask}
//       />
//     );
//   }
//
//   return (
//     <g
//       className={`${styles.barWrapper} ${stylesRelationHandle.barRelationHandleWrapper}`}
//       tabIndex={0}
//     >
//       {barDisplay}
//
//
//     </g>
//   );
// };
