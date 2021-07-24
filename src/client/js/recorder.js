import { async } from "regenerator-runtime";

const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;
const handleDownload = () => {
  const a = document.createElement("a");
  a.href = videoFile;
  a.download = "MyRecording.webm"; // a 태그의 download는 URL을 저장한다.
  document.body.appendChild(a);
  a.click(); // 사용자가 링크를 클릭한 것 처럼 작동하게 한다.
};

const handleStop = () => {
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop); // Stop Recoding을 누르면 handleStop 이벤트가 사라지고
  startBtn.addEventListener("click", handleStart); //handleStart가 실행된다.
  startBtn.addEventListener("click", handleDownload);
  recorder.stop();
};

const handleStart = async () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  recorder.ondataavailable = (e) => {
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => {
      videoFile = URL.createObjectURL(event.data);
      video.srcObject = null;
      video.src = videoFile;
      video.loop = true;
      video.play();
    };
  };
};

const init = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    // 이 스트림은 미리보기를 제공한다.
    audio: false,
    video: true,
  });
  video.srcObject = stream;
  video.play();
};

init();

startBtn.addEventListener("click", handleStart);
