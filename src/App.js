import "./styles.css";
import Accordion from "react-bootstrap/Accordion";

export default function App() {
  return (
    <div className="App">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>GRE</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Princeton Book</Accordion.Header>
                <Accordion.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Verbal Section</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Text Completion: 4th Sep</li>
                          <li>Sentence Equivalence: 5th Sep</li>
                          <li>Reading Comprehension: 6th Sep</li>
                          <li>Critical Reasoning: 7th Sep</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Quants Section</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Funda: 8th Sep</li>
                          <li>Algebra: 9th Sep</li>
                          <li>Practical: 10th Sep</li>
                          <li>Geometry: 11th Sep</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Vocab</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>List 1: 4th Sep</li>
                          <li>List 2: 5th Sep</li>
                          <li>List 3: 6th Sep</li>
                          <li>List 4: 7th Sep</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>ETS Books</Accordion.Header>
                <Accordion.Body>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Verbal Section</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Reading Comprehension: 8th Sep</li>
                          <li>Text Completion: 9th Sep</li>
                          <li>Sentence Equivalence: 10th Sep</li>
                          <li>Misc Practice: 11th Sep</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Quants Section</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Data Analysis: 4th Sep</li>
                          <li>Algebra: 12th Sep</li>
                          <li>Arithmetic: 13th Sep</li>
                          <li>Geometry: 14th Sep</li>
                          <li>Practice: 15th Sep</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Essay</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>Essay Section: 4th Sep</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Clock Application</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Features</Accordion.Header>

                <Accordion.Body>
                  <ul>
                    <li>Date + Time Format (App): 4th Sep</li>
                    <li>Font Color: 4th Sep</li>
                    <li>Font Size: 4th Sep</li>
                    <li>Font Weight: 4th Sep</li>
                    <li>Background Modifications: 5th Sep</li>
                    <li>Justify Text: 5th Sep</li>
                    <li>Converting to widget: 7th Sep</li>
                    <li>Sizing the widget: 8th Sep</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Networks & Security</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cybersecurity Udemy Courses</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Ethical Hacking Course: 7th Sep</li>
                    <li>Web Security Course: 10th Sep</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Networking</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>CCNA guide: Finish by 24th Sep</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Project Ideas</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Wireshark Clone</li>
                    <li>Nessus Clone</li>
                    <li>Bug</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Machine Learning</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Courses</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>CS50 by 12th Sep </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
