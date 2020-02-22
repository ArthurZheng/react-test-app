import React from "react";
import { shallow, mount } from "enzyme";
import { act } from 'react-dom/test-utils';

import UseCustomHook from "../UseCustomHook";


// describe("UseCustomHook", () => {

//     let wrapper;

//     beforeEach(() => {
//       wrapper = mount(<UseCustomHook />);
//     });

//     it('renders correctly', () => {

//     })

// }


// describe.only('UseCustomHook', () => {
//     let results;
//     const renderHook = hook => {
//       function HookWrapper() {
//         results = hook();
//         return null;
//       }
//       mount(<HookWrapper />);
//       return results;
//     };
  
//     it('works', () => {
//       renderHook(UseCustomHook);
//       expect(results.count).toEqual(0);
//     console.log('results', results);
//       act(() => {
//         results.increment();
//       });
  
//       expect(results.count).toEqual(1);
//     });
//   });


  describe.only('UseCustomHook', () => {
    it('works', () => {
      expect(1 + 2).toEqual(3);
    })

    it('renders correctly', () => {
        let results;
        function HookWrapper() {
            results = UseCustomHook();
            return null;
        }
        expect(1 + 1).toEqual(2);
        mount(<HookWrapper />);
        expect(results.count).toEqual(0);

        act(() => {
            results.increment();
        })
        expect(results.count).toEqual(1);
    })

  })