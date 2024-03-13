import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

function PokemonCard({ pokemon }) {

  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{pokemon.name.jp}</Typography>
        <Typography level="body-sm">{pokemon.name.fr}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={pokemon.sprites.regular}
          srcSet={pokemon.sprites.regular}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Category</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {pokemon.category}
          </Typography>
        </div>
        <Link className="button-generation" to={`pokemon/gen/${pokemon.generation}`}>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          >

            {pokemon.generation}

          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      fr: PropTypes.string.isRequired,
      jp: PropTypes.string.isRequired,
    }),
    types: PropTypes.arrayOf(PropTypes.string),
    sprites: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }),
    category: PropTypes.string.isRequired,
    generation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default PokemonCard;