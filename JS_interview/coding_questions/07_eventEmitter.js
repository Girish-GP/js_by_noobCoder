/*
Event emitter is a design pattern that enables decoupled communication between different parts of the applications
Instead of one part directly calling other part , it emits events that the other part can listen and react upon.

Core methods:
1] on(event,listener)--> Register a listener for an event
2] off(event,listener) ---> Removes listener for the event
3] once(event,listener) ---> Register listener for the event and trigger it only once
4] emit(event,...args) --> Emit the event with optional data


*/

class EventEmitter {
  constructor() {
    this.events = {}; //Events to emit
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event]?.push(listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event]?.filter((fnc) => fnc !== listener);
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;

    for (let listener of this.events[event]) {
      try {
        listener(...args);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

const uploader = new EventEmitter();

uploader.on("start", (file) => console.log(`${file} started uploading`));
uploader.on("progress", (file, percent) =>
  console.log(`${file} uploaded ${percent}%`)
);
uploader.on("complete", (file) =>
  console.log(`${file} uploaded successfully.`)
);
uploader.on("error", (error) => console.log(error));

function simulateUploadFile(file) {
  uploader.emit("start", file);

  let percent = 0;

  let timerId = setInterval(() => {
    percent += 25;

    if (Math.random() < 0.1) {
      uploader.emit("error", new Error(`${file} upload failed due error`));
      clearInterval(timerId);
      return;
    }

    if (percent >= 100) {
      uploader.emit('complete',file);
      clearInterval(timerId);
      return;
    }

    uploader.emit("progress", file, percent);
  }, 500);
}

simulateUploadFile('file1.docs');
simulateUploadFile('file2.docs');