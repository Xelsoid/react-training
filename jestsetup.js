import enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16/build";

enzyme.configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;

console.error = message => {
  throw new Error(message);
};
