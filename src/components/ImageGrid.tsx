import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ImageCard } from './ImageCard';
import { ImageGridProps } from '../utils/constants';

export function ImageGrid(props: ImageGridProps) {
  const {
    images,
    handleImageCardClick,
  } = props;

  return (
    <div className="ImageGrid">
      <Row sm="3">
        {images.map((image) => (
          <Col key={image.id} className="mb-4">
            <ImageCard
              image={image}
              handleImageCardClick={handleImageCardClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
