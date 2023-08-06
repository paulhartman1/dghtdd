import { render, screen } from "@testing-library/react";
import Navbar from './index';
describe('Navbar', () => {
    it('should render without crashing', () => {
        render(<Navbar />);
    });
});