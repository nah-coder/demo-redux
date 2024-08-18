// const reducer = "Nguyễn Anh Huy";
// console.log(reducer)
// export default reducer

//1. tạo createStore từ redux
import {createStore} from 'redux'

//2. Tạo reducer từ old state và action
//input: old state, action
//output: new state

    //2.1: tạo init state
const initState={
    username:"Nguyễn Anh Huy",
    course:"fullstack Java"
}
    //2.2:tạo reducer
const reducer =(state=initState, action)=>{
    //xử lý logic khi tiếp nhận action
    switch(action.type){
        case "CHANGE_USER_NAME" :
            state.username=action.data;
            break;
        case "CHANGE_COURSE_NAME" :
            state.course=action.data;
            break;
    }

    return state;//new state
}
//3. tạo Store từ reducer
const store = createStore(reducer);


//4. Hiển thị dữ liệu từ Store ra component(log)
console.log("Store: ", store);//cấu trúc của Store
//getState=> Lấy ra state
console.log("state: ",store.getState());

//****************** Action ******************** */
//thực hiện thay đổi state trong store
//action: làm thay đổi userName trong state của store
const actChangeUserName=(param)=>{
    return{
        type:"CHANGE_USER_NAME",
        data:param
    }
}
//bắn action từ component lên store để thực hiện cập nhật state
//ghi chú: viết lại logic cho reducer
store.dispatch(actChangeUserName("Nguyễn Anh Huy ........."));
console.log("state new : ", store.getState());
store.dispatch(actChangeUserName("Vũ Minh Trang ........."));
console.log("state new : ", store.getState());


//action : làm thay đổi course name
const actChangeCourseName = (data)=>{
    return{
        type:"CHANGE_COURSE_NAME",
        data:data,
    }
}
//bắn action vào store
store.dispatch(actChangeCourseName("React-Redux"));
//hiển thị dữ liệu từ store khi 
console.log("state new (course) : ",store.getState());


export default reducer;
