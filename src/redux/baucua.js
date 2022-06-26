const initialState = {
    tongDiem: 500,
    danhSachCuoc: [
        {diemcuoc: 0, loai: "bau"},
        {diemcuoc: 0, loai: "cua"},
        {diemcuoc: 0, loai: "tom"},
        {diemcuoc: 0, loai: "ca"},
        {diemcuoc: 0, loai: "ga"},
        {diemcuoc: 0, loai: "nai"},
    ],
    xucXac: ['bau','bau','bau'],
};

const baucuaReducer = (state = initialState,action) => {
    switch (action.type) {
        case "TANG_CUOC" : {
            const loai = action.data;
            // Tăng điểm cược của một loại con vật 
            const danhSachCuoc = state.danhSachCuoc.map(item => {
                if (item.loai === loai) {
                    return {...item,diemcuoc: item.diemcuoc + 100}
                }
                return item
            });
            // Khi tăng điểm cược là phải giảm điểm tổng
            const tongDiem = state.tongDiem - 100;
            return {...state,danhSachCuoc,tongDiem}
        }
        case "GIAM_CUOC" : {
            const loai = action.data;
            // giảm điểm cược của một loại con vật 
            const danhSachCuoc = state.danhSachCuoc.map(item => {
                if (item.loai === loai) {
                    return {...item,diemcuoc: item.diemcuoc - 100}
                }
                return item
            });
            // Khi giảm điểm cược là phải tăng điểm tổng
            const tongDiem = state.tongDiem + 100;
            return {...state,danhSachCuoc,tongDiem}
        }
        case "PLAY_GAME" : {
            // B1: Random xúc xắc
            const CON_VAT = ['bau','cua','ca','tom','ga','nai']
            const xucXac = state.xucXac.map(item => {
                const random = Math.floor(Math.random() * 6)
                return CON_VAT[random];
            })
            // B2: Lọc danh đã cược có điểm cược lớn hơn 0
            const danhSachDatCuoc = state.danhSachCuoc.filter((item)=>{
                item.diemcuoc
            })
            let diemThuong = 0
            // B3: hoàn tiền nếu danh sách cược trùng với xúc xắc 
            diemThuong += danhSachDatCuoc.reduce((result,item)=> {
                // Kiểm tra xem item đặt cược có trùng với xúc xắc hay không 
                const found = xucXac.find(x => x === item.loai)
                // Nếu timf thấy thì hoàn cược 
                if (found) {
                    return result + item.diemcuoc;
                }
                return result;
            },diemThuong)
            // B4: tính tiền thắng
            diemThuong += xucXac.reduce((result,x)=>{
                const found = state.danhSachCuoc.find(item => item.id === x)
                if (found) {
                    return result + found.diemcuoc;
                }
                return result;
            },diemThuong)
            const tongDiem = state.tongDiem + diemThuong;
            // B5: reset lại danh sách cược 
            const danhSachCuoc = state.danhSachCuoc.map((item)=> ({
                ...state,
                diemcuoc: 0
            }))



            return {...state,xucXac,tongDiem,danhSachCuoc};

        }
        default:
            return state;
    }
};

export default baucuaReducer;