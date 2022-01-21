import { Pipe, PipeTransform } from '@angular/core';
import { Room } from 'src/app/interfaces/room';


@Pipe({ name: 'filterByUP', pure: false })
export class FilterByUserPrice implements PipeTransform {
    transform(rooms: Room[], userPrice: any): Room[] {
        //  return rooms.filter((item: Room) => item.price <= Number(userPrice));
        const resultArray = [];
        if (rooms.length === 0 || userPrice == '') {
            return rooms;
        }

        for (const item of rooms) {
            if (item.price <= Number(userPrice)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
} 