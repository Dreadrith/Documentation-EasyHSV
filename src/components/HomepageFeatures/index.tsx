import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
    title: 'Easy to Use',
    description: 
		(
		  <>
			Made for the best user experience first and foremost. Easily appliable and easily removable.
		  </>
		)
	},
	{
    title: 'HDR Support',
    description: 
		(
		  <>
			Can apply HSV that goes beyond the regular brightness for easy emission control.
		  </>
		)
	},
	{
    title: 'Flexible & Quest Compatible',
    description: 
		(
		  <>
			Works on any color field of any shader! Including Android shaders.
		  </>
		)
	},
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
