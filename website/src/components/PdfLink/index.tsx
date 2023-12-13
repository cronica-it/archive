// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';

// Component to render a link that downloads a PDF file.
export function PdfLink({ href }): JSX.Element {
  return (
    <a href={href} target="_blank">
      <img class="link-icon" src="./img/pdf-24.png" width="24" height="24" alt="PDF"/>
    </a>
  );
}
