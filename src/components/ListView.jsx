import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

const ListView = ({ data, itemsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleCardClick = (id) => {
        navigate(`/article/${id}`);
    };

    return (
        <div className="list-view">
            <div className="space-y-4">
                {currentItems.map((item) => (
                    <div key={item.id} onClick={() => handleCardClick(item.id)} className="cursor-pointer">
                        <Card item={item} isGridView={false} />
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button
                    className="pagination-arrow"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <VscTriangleLeft />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        className={page === currentPage ? 'active' : ''}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className="pagination-arrow"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <VscTriangleRight />
                </button>
            </div>
        </div>
    );
};

export default ListView;
