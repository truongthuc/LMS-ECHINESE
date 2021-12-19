import { instance } from '../instance';

type ScheduleSelfCourseResult<T = any> = {
	courseSchedulesArranged: T;
	courseSchedulesInarranged: T;
	message: string;
};
export const createSelfCourse = (data: ISCPost) => instance.post<IApiResultData<IScheduleZoomDetail>>('/api/CreateCourse1vs1/', data);

export const getScheduleSelfCourse = (id: number) =>
	instance.get<ScheduleSelfCourseResult<ISCSchedule[]>>(`/api/courseNotScheduleYet/${id}`);

export const checkStudyTimeSelfCourse = (date: string) =>
	instance.get<IApiResultData<IStudyTime[]>>(`/api/GetStudyTimeByDateAndStudentID?date=${date}`);

export const checkTeacherSelfCourse = (data: ISCCheckTeacher) =>
	instance.get<IApiResultData<IUser[]>>(
		`/api/GetTeacherByDateAndStudyTimeAndCurriculumDetail?date=${data.date}&curriculumsDetailID=${data.curriculumsDetailID}&studyTimeID=${data.studyTimeID}`
	);

export const updateScheduleSelfCourse = (data: ICSScheduleToSave) => instance.put<IApiResultData>('/api/UpdateCourseSchedule', data);
export const cancelScheduleSelfCourse = (id: number) => instance.put<IApiResultData>(`/api/RemoveCourseSchedule/${id}`);
