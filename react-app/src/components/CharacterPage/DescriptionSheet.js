import Header from "./Header";

const DescriptionSheet = ({ character, setHelpContents }) => {
  const descriptionHelper = (
    <div>
      The description page is for any extra information about your character.
      Describe what the character looks like, their background, what they had to
      eat last week and any other traits or events in their lives that are
      important.
    </div>
  );

  return (
    <div className="descriptionSheet h-full bg-gray-100 max-w-characterSheet min-w-characterSheet w-full rounded-lg p-5" onMouseEnter={() => setHelpContents(descriptionHelper)}>
      <Header character={character}></Header>
      <div className="border border-black rounded-lg p-4 mt-2">
        {character.description} These can be very long so here is Lorem Ipsum.
        Placeat tenetur ea aut ipsa libero ea itaque dignissimos. Laboriosam
        nemo praesentium earum. Tempore sapiente eveniet dolor consequuntur ut
        ullam. Maiores fugit quod dolorem officiis. Iste odio officiis
        dignissimos architecto magnam commodi unde omnis. Aperiam quis veritatis
        consectetur veritatis. Similique tenetur deleniti voluptatem non nobis
        quam autem sed. Et quo sunt cumque ut maiores delectus assumenda. Facere
        ipsam officia et voluptates alias quo. Itaque porro et et velit aut
        impedit. Dolorem id enim officiis minima et. Mollitia nihil quia non
        excepturi non veritatis officia eum. Aliquid quia labore ex. Eos
        corporis odit assumenda. Incidunt quas est enim nisi. Officia eveniet
        pariatur explicabo neque. Architecto qui ut aut nihil et. Aut ipsa esse
        aspernatur et est laudantium doloribus. Neque accusamus laboriosam et
        enim. Placeat tenetur ea aut ipsa libero ea itaque dignissimos.
        Laboriosam nemo praesentium earum. Tempore sapiente eveniet dolor
        consequuntur ut ullam. Maiores fugit quod dolorem officiis. Iste odio
        officiis dignissimos architecto magnam commodi unde omnis. Aperiam quis
        veritatis consectetur veritatis. Similique tenetur deleniti voluptatem
        non nobis quam autem sed. Et quo sunt cumque ut maiores delectus
        assumenda. Facere ipsam officia et voluptates alias quo. Itaque porro et
        et velit aut impedit. Dolorem id enim officiis minima et. Mollitia nihil
        quia non excepturi non veritatis officia eum. Aliquid quia labore ex.
        Eos corporis odit assumenda. Incidunt quas est enim nisi. Officia
        eveniet pariatur explicabo neque. Architecto qui ut aut nihil et. Aut
        ipsa esse aspernatur et est laudantium doloribus. Neque accusamus
        laboriosam et enim.
      </div>
    </div>
  );
};

export default DescriptionSheet;
