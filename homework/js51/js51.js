const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };
  
  const product2 = {
    distributor: {
        name: 'Giraffe Water Company',
        address: {
          street: 'Phetchaburi',
          subdistrict: 'Thanonphetchaburi',
          district: 'Ratchathewi',
          province: 'Bangkok'
        }
      }
  };
  
  // Log province ของ product1
  console.log(product1.distributor?.address?.province);  // Output: Bangkok
  
  // Log province ของ product2 โดยใช้คำสั่งเดียวกับ product1
  console.log(product2.distributor?.address?.province);  // Output: undefined
  