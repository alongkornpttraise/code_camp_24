function isEmpty(obj) {
    // ใช้ Object.keys() เพื่อดึงลิสต์ของ property names ใน object
    // ถ้า length ของลิสต์เป็น 0 แสดงว่าเป็น object ว่าง
    return Object.keys(obj).length === 0;
}

// ตัวอย่างการใช้งาน
const obj1 = {};
const obj2 = { name: 'John', age: 30 };

console.log(isEmpty(obj1)); // Output: true (เป็น object ว่าง)
console.log(isEmpty(obj2)); // Output: false (ไม่ใช่ object ว่าง)
