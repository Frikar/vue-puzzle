import {shallowMount} from '@vue/test-utils'
import 'jest-localstorage-mock';
import Records from "@/components/Records";

describe('Records.vue', () => {
    it('get records from local storage', () => {
        shallowMount(Records, {})
        expect(localStorage.getItem).toHaveBeenCalledWith('records');
    });
})
