package im.zhaojun.zfile.core.exception.file;

import im.zhaojun.zfile.core.exception.StorageSourceException;
import im.zhaojun.zfile.core.util.CodeMsg;

/**
 * 无权限的存储源异常
 *
 * @author yangjiale
 */

public class ForbiddenStorageSourceException extends StorageSourceException {
    public ForbiddenStorageSourceException(String message) {
		super(CodeMsg.STORAGE_SOURCE_FORBIDDEN, null, message);
    }
}