import React from "react";
import classes from "./CourseEnrolled.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import CourseCard1 from "../../Component/CourseCard1/CourseCard1";
import courseCardImg from "../../Imgs/courseCardImg1.png";
import UnitBox from "../../Component/UnitBox/UnitBox";
import CourseTime from "../../Component/CourseTime/CourseTime";
import CourseHeader from "../../Component/CourseHeader/CourseHeader";
import CourseSideBar from "../../Component/CourseSideBar/CourseSideBar";
<<<<<<< HEAD

function CourseEnrolled({ children }) {
=======
import axiosInstance from "../../adapters/api/axiosInstance";
// import Video from "../Component/VideoPlayer/VideoPlayer";
import Video from "../../Component/VideoPlayer/VideoPlayer";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

function CourseEnrolled({ children }) {
  const params = useParams();
  const courseId = params.id;
  console.log(courseId);

  const { unitIndex, topicIndex } = params;

  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    const getCourse = async () => {
      const res = await axiosInstance.get("/enrolledCourses/get", {
        params: { courseId },
      });
      console.log(res.data);
      setCourseData(res.data);
    };
    getCourse();
  }, []);

  console.clear();

  console.log({ unitIndex, topicIndex });

  if (
    typeof topicIndex === "undefined" &&
    typeof courseData?.courseId?._id !== "undefined"
  )
    return <Redirect to={`/my-courses/${courseData?.courseId?._id}/1/1`} />;

>>>>>>> 3a045014093d85b9d1d6cf99d1d05cff05c9e36f
  return (
    <div className={classes.CourseEnrolled}>
      <div className={classes.CourseContainer}>
        <CourseHeader />
        <div className={classes.abc}>
          <div className={classes.Sidebar}>
            <CourseSideBar />
          </div>
          <div>
            {typeof courseData?.courseId?.Units !== "undefined" && (
              <Video courseData={courseData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrolled;
